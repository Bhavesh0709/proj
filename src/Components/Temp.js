import Card from "./Card";

function Temp() {
    // const data = ['atharva', 'aneeza', 'Shruti', 'Sonali', 'Nikita'];
    const data = [
        {
            name: 'Atharva',
            age: 21
        },
        {
            name: 'Shruti',
            age: 21
        },
        {
            name: 'Sonali',
            age: 21
        },
        {
            name: 'Nikita',
            age: 21
        }
    ]
    return(
        <div>
            {data.map((value, index) => (
               <Card dummy={value} />
            ))}
        </div>
    );
}

export default Temp;