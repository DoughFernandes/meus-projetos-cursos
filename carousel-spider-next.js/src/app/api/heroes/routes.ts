import { NextResponse } from "next/server";

const getHeroes = async ()=>{
    const res = await fetch(`${process.env.API_URL}`);
    const data = await res.json();
    
    return NextResponse.json({ data });
};

export default getHeroes;