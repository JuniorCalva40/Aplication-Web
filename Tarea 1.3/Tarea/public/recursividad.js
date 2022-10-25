const asyncFunction = (t) => new Promise(resolve => setTimeout(resolve, t));

const getData = async (resolve, reject, count) => {

    console.log('Hola Como estas');
    await asyncFunction(3000);
    console.log('Bla bla bla');

    count++;

    if (count < 2) {
        getData(resolve, reject, count);
    } else {
        return resolve();
    }
}

const go = async () => {
    await new Promise((r, j) => getData(r, j, 0));
    console.log('Un gusto conocerte Adios');
};

go();
