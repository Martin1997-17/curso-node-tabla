const fs = require('fs');  

const createFile = async(base = 5, listar = true) => {

    try{
        let salida = '';
        for(let i = 0; i <= 10; i++){
            salida += `${base} x ${i} = ${base*i}\n`;
        }

        if(listar){
            console.log(salida);
        }
        

        fs.writeFileSync(`./salida/tabla_del_${base}.txt`, salida);

        return `tabla_del_${base}.txt`;
    }catch(err){
        throw err;
    }

}

module.exports = {
    createFile
}