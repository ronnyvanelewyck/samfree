//
//  ContentView.swift
//  samfree
//
//  Created by Ronny Van Elewyck on 11/11/2023.
//

import SwiftUI

struct ContentView: View {
    @State private var username = ""
    @State private var password = ""
    @State private var isAuthenticated = false

    var body: some View {
        VStack {
            TextField("Username", text: $username)
                .padding()
                .textFieldStyle(RoundedBorderTextFieldStyle())

            SecureField("Password", text: $password)
                .padding()
                .textFieldStyle(RoundedBorderTextFieldStyle())

            Button("Login") {
                login()
            }
            .padding()
            .disabled(username.isEmpty || password.isEmpty)
        }
        .padding()
        .alert(isPresented: .constant(isAuthenticated)) {
            Alert(title: Text("Login Successful"), message: Text("Welcome, \(username)!"), dismissButton: .default(Text("OK")))
        }
    }

    private func login() {
        guard let url = URL(string: "http://localhost:5001/api/auth") else {
            // Handle invalid URL
            return
        }

        let credentials = ["username": username, "password": password]

        var request = URLRequest(url: url)
        request.httpMethod = "POST"
        request.addValue("application/json", forHTTPHeaderField: "Content-Type")

        do {
            request.httpBody = try JSONSerialization.data(withJSONObject: credentials)
        } catch {
            // Handle JSON serialization error
            return
        }

        URLSession.shared.dataTask(with: request) { data, response, error in
            guard let data = data, error == nil else {
                // Handle network error
                return
            }

            do {
                let response = try JSONDecoder().decode(AuthResponse.self, from: data)

                if response.isAuthenticated {
                    DispatchQueue.main.async {
                        self.isAuthenticated = true
                    }
                } else {
                    // Handle authentication failure
                    print("Authentication failed")
                }
            } catch {
                // Handle JSON decoding error
                print("JSON decoding error")
            }
        }.resume()
    }
}

struct ContentView_Previews: PreviewProvider {
    static var previews: some View {
        ContentView()
    }
}

struct AuthResponse: Decodable {
    let isAuthenticated: Bool
    // Add other properties as needed
}
