const {hashSync, genSaltSync, compareSync} = require('bcryptjs');
async function gerarHash(senha) {
    return hashSync(senha, genSaltSync(10));
}

async function compararHash(senha, hash){
    return compareSync(senha, hash);
}

module.exports = {gerarHash, compararHash};