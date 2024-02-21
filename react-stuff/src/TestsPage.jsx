import { useEffect, useState } from "react";
import { getAllTests } from "./api/test.api";
import { Test } from "./Test";

export function TestsPage() {
    const [tests, setTests] = useState([]);

    useEffect(() => {
        getAllTests().then(res => {setTests(res.data)
        console.log(res);})
    }, [])

    return (
        <div className="grid grid-cols-3 gap-3">
            {tests.map((test) => (
                <Test key={test.id} test={test} />
            ))}
        </div>
    )
}