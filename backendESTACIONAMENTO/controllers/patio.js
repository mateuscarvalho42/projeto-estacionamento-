import { Patio } from "../models/Patio.js"

const checarPatio = async (req, res) => {
    const vagas = await Patio.findAll()
    console.log(vagas.map(patio_id => patio_id.toJSON()))
}

export { checarPatio }