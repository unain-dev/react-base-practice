import { useState, useEffect } from "react"

// 4. cleanup function
function Hello(){
    // 방식 1번. 이 방식이 더 흔하게 사용 됨.
    useEffect(()=>{
        console.log("created Hello");

        // cleanup 부분. destroy 될 때만 실행 됨.
        return () => {
            console.log("destroyed Hello");
        }

    }, []);


    // 방식 2번. 결과와 뜻하는 건 같음. 표현이 다를 뿐.
    function byFn(){
        console.log("bye");
    }
    function hiFn(){
        console.log("hi");
        return byFn;
    }
    useEffect(hiFn, []);


    return <h2>Hello</h2>
}

function Counter() {
    const [counter, setCounter] = useState(0);
    const onClick = () => setCounter((prev) => prev + 1);
    const [keyword, setKeyword] = useState("");
    const onChange = (event) => {
        setKeyword(event.target.value);
    };

    // 1. 렌더링 될 때마다(값의 변화가 생길 때마다) 실행 됨.
    console.log("Counter render"); 

    // 2. 최초 렌더링 시에만 실행 됨.
    const iRunOnlyOnce = () => {
        console.log("i run only once");
    }
    useEffect(iRunOnlyOnce, []);

    // 3. 해당 값이 변화할 때에만 실행됨.
    const changeKey = () => {
        // 이렇게만 실행되면 초기 렌더링 때에도 실행됨.
        //console.log("keyword is changed : ", keyword);

        // 맨 처음 렌더링 될 때, 키워드가 2자 이하일 때에는 실행되지 않음.
        if(keyword !== "" && keyword.length>2){
            console.log("keyword is changed : ", keyword);
        }
    }
    useEffect(changeKey, [keyword]);
    useEffect(()=>console.log("counter is changed"), [counter])

    // 4. cleanup
    const [showing, setShowing] = useState(false);
    const onClick2 = () => {
        setShowing((prev) => !prev);
    }

    return (
        <div>
            <hr/>
            <div>
                <h1>useEffect Counter Examples</h1>
                <input 
                    value={keyword} 
                    onChange={onChange}
                    type="text" 
                    placeholder="Search here"
                />
                <h2>{counter}</h2>
                <button onClick={onClick}>Click me</button>
            </div>

            <br/>
            <hr/>
            <div>
                <h1>useEffect cleanup</h1>
                {showing ? <Hello/> : null}
                <button onClick={onClick2}>{showing ? "Hide" : "Show"}</button>
            </div>
        </div>
    )
}

export default Counter;