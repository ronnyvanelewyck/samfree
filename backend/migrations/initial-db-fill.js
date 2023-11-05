module.exports = {
    async up(db, client) {
        await db
            .collection("company")
            .insertMany([
                { name1: "MAI", name2: "Maria Assumpta Instituut" },
                { name1: "SAMFREE", name2: "SAM for everybody" },
                { name1: "IMEC", name2: "IMEC sponsors" },
                { name1: "SFRANCISCUS", name2: "Nieuwe klanten?" },
            ]);
    },

    async down(db, client) {
        await db.collection("company").deleteMany({
            name1: {
                $in: ["MAI", "SAMFREE", "IMEC", "SFRANCISCUS"],
            },
        });
    },
    
};