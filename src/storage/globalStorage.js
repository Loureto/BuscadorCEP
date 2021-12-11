async function SaveValues(key, value){
    await localStorage.setItem(key, value);
}

export function Remove(key){
    localStorage.removeItem(key);
}

export function GetValues(key){
    let data = localStorage.getItem(key);
    return data;
}

export default SaveValues;