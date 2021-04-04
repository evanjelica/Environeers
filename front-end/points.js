function incrementPoints()
{
    var value = parseInt(document.getElementById('points').value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    document.getElementById('points').value = value;
}