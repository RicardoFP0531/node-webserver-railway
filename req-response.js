
const http = require('http');


http.createServer( (req, res) => {

    //res.writeHead(200, {'Content-Type': 'text/plain'})
    //res.writeHead(200, {'Content-Type': 'application/json'})
    res.setHeader('Content-Disposition', 'attachment; filename=lista.csv');
    res.writeHead(200, {'Content-Type': 'application/csv'})

    //ejemplo de json 
    // const persona = {
    //     id: 1,
    //     nombre: 'Ricardo',
    // }



    //res.write(JSON.stringify(persona));
    res.write('id, nombre\n')
    res.write('1, Ricardo\n')
    res.write('2, Juan\n')
    res.write('3, Pedro\n')
    res.end();

})
.listen(8080);


console.log('Escuchando desde el puerto', 8080);




