module.exports = {
    async up(db, client) {
        await db
            .collection("companies")
            .insertMany([
                { shorttext: "MAI" },
                { shorttext: "SAMFREE" },
                { shorttext: "IMEC" },
                { shorttext: "SFRANCISCUS" },
            ]);
    },

    async down(db, client) {
        await db.collection("companies").deleteMany({
            shorttext: {
                $in: ["MAI", "SAMFREE", "IMEC", "SFRANCISCUS"],
            },
        });
    },
};