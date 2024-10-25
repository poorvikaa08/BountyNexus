//"use client";
import Link from "next/link";

const getBugs = async () => {
    try {
        const res =await fetch("http://localhost:3000/api/addbugs", {
            cache: "no-store",
        })

        if(!res.ok) {
            throw new Error('Failed to fetch bugs');
        }
        return res.json();
    } catch (error) {
        console.error('Error fetching bugs:', error);
    }
}
export default async function ShowBugs() {

    const {bugs} = await getBugs();
    return (
<>
{bugs.map( b => (
    //console.log(b);
   <div>
   <div>
       <h2>{b.title}</h2>
       <div>{b.description}</div>
   </div>
</div>
))}

</>
    );
}