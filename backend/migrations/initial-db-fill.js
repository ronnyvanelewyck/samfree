module.exports = {
 /*   async up(db, client) {
        await db
            .collection("company")
            .insertMany([
                { name1: "MAI", name2: "Maria Assumpta Instituut" },
                { name1: "SAMFREE", name2: "SAM for everybody" },
                { name1: "IMEC", name2: "IMEC sponsors" },
                { name1: "SFRANCISCUS", name2: "Nieuwe klanten?" },
            ]);
    },*/

    async up(db, client) {
        await db
            .collection("workflow")
            .insertMany([
                {
                    header: {
                        tasktype: 'standard2',
                        text1: 'Bechamel Saus',
                        text2: '10 personen',
                        imageurl: 'https://www.qognimacloud.be/sam3/images/COPYH_IMG_88c0990cc5430b49fd48fbf88f3fbbef.png'
                    },
                    material: [
                        {
                            order: 1,
                            text: 'Kookpot klein',
                            amount:1,
                            uom: 'maal',
                            imageurl: 'https://www.qognimacloud.be/sam3/images/COPYM_IMG_3aac7ff70bf1b9333f45b55a3e42f6e8.png'
                        },
                        {
                            order: 2,
                            text: 'Garde (klopper)',
                            amount: 1,
                            uom: 'maal',
                            imageurl: 'https://www.qognimacloud.be/sam3/images/COPYM_IMG_9b0f2e7ec3f90de386cf0edde8c045f9.png'
                        }                        
                    ],
                    ingredient: [
                        {
                            order: 1,
                            text: 'Bakboter',
                            amount: 180,
                            uom: 'gram',
                            allergen: ['melk','gluten','noten'],
                            nutriscore: 'C',
                            price: 9.99,
                            currency: 'EUR',
                            imageurl: 'https://www.qognimacloud.be/sam3/images/COPYI_IMG_4b687a2cdebc668fd1ae8add12db2190.png'
                        },
                        {
                            order: 2,
                            text: 'Tarwebloem',
                            amount: 240,
                            uom: 'gram',
                            allergen: ['gluten'],
                            nutriscore: 'A',
                            price: 0.99,
                            currency: 'EUR',
                            imageurl: 'https://www.qognimacloud.be/sam3/images/COPYI_IMG_08789eabf164515f817dadc9def2c1df.png'
                        },    
                        {
                            order: 3,
                            text: 'Volle melk',
                            amount: 2500,
                            uom: 'gram',
                            allergen: ['melk'],
                            nutriscore: 'A',
                            price: 2.97,
                            currency: 'EUR',
                            imageurl: 'https://www.qognimacloud.be/sam3/images/COPYI_IMG_56b0a1b666bb710a15bf22bde5e35984.jpg'
                        }, 
                        {
                            order: 4,
                            text: 'Peper en Zout (PEZO)',
                            uom: 'naar smaak',
                            imageurl: 'https://www.qognimacloud.be/sam3/images/COPYI_IMG_4ea2eab293d000ab84db3cf99959399f.png'
                        }, 
                        {
                            order: 5,
                            text: 'Noodmuskaat',
                            uom: 'naar smaak',
                            imageurl: 'https://www.qognimacloud.be/sam3/images/COPYI_IMG_afb61e02df6834499914389752820882.png'
                        }                   

                    ], 
                    workflow: [
                        {
                            order: 1,
                            screenformat: 'C1',
                            steptext: 'Stap 1',
                            steptitle: 'Mise En Place (MEP) kookpot',
                            textlines: ['Neem een kookpot.', 'Zet de kookpot op een matig vuurtje.'],
                            imageurl1: 'https://www.qognimacloud.be/sam3/images/COPYS_IMG_c2815a4e5c9a3b9c757fb6516cd368db.jpg'
                        },
                        {
                            order: 2,
                            screenformat: 'C1',
                            steptext: 'Stap 2',
                            steptitle: 'Roux maken',
                            textlines: ['Doe de boter in de kookpot (foto1).', 'Laat de boter smelten (foto2).', 'Doe de bloem bij de bruisende boter (foto3).', 'Meng met de garde zorgvuldig tot alle bloem is verdwenen (foto4).'],
                            imageurl1: 'https://www.qognimacloud.be/sam3/images/COPYS_IMG_a1c0c83388038c0b4b133f36238e492d.jpg'
                        },
                        {
                            order: 3,
                            screenformat: 'C1',
                            steptext: 'Stap 3',
                            steptitle: 'Koekjes geur',
                            textlines: ['Laat het mengsel al roerend een beetje opdrogen.', 'Als je een koekjes geur hebt mag je de roux van het vuur halen.'],
                            imageurl1: 'https://www.qognimacloud.be/sam3/images/COPYS_IMG_a8dafabe3797818aad639bd9c9c07ef7.jpg'
                        },
                        {
                            order: 4,
                            screenformat: 'C1',
                            steptext: 'Stap 4',
                            steptitle: 'Melk toevoegen',
                            textlines: ['Voeg de melk beetje bij beetje toe (foto1).', 'Meng met de garde zorgvuldig tot een gladde massa (foto2).', 'Herhaal dit tot alle melk is opgebruikt (foto3).', 'Als de saus te dik is voeg je nog melk toe.'],
                            imageurl1: 'https://www.qognimacloud.be/sam3/images/COPYS_IMG_390774385a836221a6fa449184b411ec.jpg'
                        }
                    ]    
                },
                {
                    header: {
                        tasktype: 'standard1',
                        text1: 'Handen wassen',
                        text2: 'Hoe doe je dit?'
                    },
                    material: [
                    ],
                    ingredient: [
                    ],
                    workflow: [
                        {
                            order: 1,
                            screenformat: 'C0',
                            steptext: 'Stap 1',
                            steptitle: 'Alles klaarleggen',
                            textlines: ['eerste tekstlijn', 'tweede tekstlijn']
                        },
                        {
                            order: 2,
                            screenformat: 'C0',
                            steptext: 'Stap 2',
                            steptitle: 'Goed inzepen',
                            textlines: ['eerste tekstlijn', 'tweede tekstlijn', 'en nog eentje', 'en nog eentje voor den tweede keer']
                        },
                        {
                            order: 3,
                            screenformat: 'C0',
                            steptext: 'Stap 3',
                            steptitle: 'Dit is nog een laatste stap',
                            textlines: ['eerste tekstlijn', 'tweede tekstlijn', 'en nog eentje', 'en nog eentje voor den tweede keer']
                        }
                    ]
                },
            ]);
    },

/*    async down(db, client) {
        await db.collection("company").deleteMany({
            name1: {
                $in: ["MAI", "SAMFREE", "IMEC", "SFRANCISCUS"],
            },
        });
    },*/
    
};