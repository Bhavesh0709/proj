import Card from "./Card";
function Temp() {
    const data = ['atharva', 'aneeza', 'Shruti', 'Sonali', 'Nikita'];
    // const data = [
    //     {
    //         Question: 'What is yoour age?',
          
    //     },
    //     {
    //         name: 'Shruti',
    //         a 
    //     },
    //     {
    //         name: 'Sonali',
    //         age: 21
    //     },
    //     {
    //         name: 'Nikita',
    //         age: 21
    //     }
    // ]
    return(
        <div>
            {data.map((value, index) => (
               <Card dummy={value} />
            ))}
            <img src={temp}/>
        </div>
    );
}

export default Temp;