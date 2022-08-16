/* const objectsMerge = (...objects) => 
{
    let result = {}
    objects.forEach((obj, index) => result[index] = obj)
    return result
} */


const objectsMerge = (...objects) => {
    const objectsresult = {...objects};
    return objectsresult;
};

export default objectsMerge;



