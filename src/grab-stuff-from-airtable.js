const llAt = require(`./utilities/ll-airtable-tools`)
const { cyan } = require(`./utilities/ll-logging-tools`)

module.exports = async () => {
    const result = await llAt.findManyByValue({
        baseId: "apprSmdoCbtfnsGwY",
        table: "ShowYourImages",
        view: "MAIN_VIEW",
        maxRecords: 1,
        field: "PostedBySlackUser",
        value: "U02655ZC50U"
    })
    cyan(result)
}
