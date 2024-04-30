export const revalidate = 0;
async function getData(id){
    const data = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
    return data.json()
}
const page = async (props) => {
    let id = await parseInt(props.searchParams["id"]);
    const data = await getData(id);
    console.log(data);
  return (
    <div>
        <ul>{data?.map(item => (
            <li key={item.id}>{item.name}</li>
        ))}</ul>
    </div>
  )
}

export default page