require('dotenv').config();
const {
    quicktype,
    InputData,
    JSONSchemaInput,
    JSONSchemaStore,
} = require("quicktype-core")


async function main() {
    console.log("generate-types", process.env);

    quicktype({
    })
}

main();