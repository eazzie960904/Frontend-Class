import React, {useState} from 'react'

export const Body3 = () => {
    const [state,setState] = useState({
        name:"",
        gender:"",
        birth:"",
        bio:"",
    });

    const handleOnChange = (e)=>{
        console.log("현재수정대상:", e.target.name);
        console.log("수정값:", e.target.value);
        setState({
            ...state,
            [e.target.name]:e.target.value,
        });
    };

  return (
    <div>
        <div>
            <input
            name='name' 
            value={state.name} 
            onChange={handleOnChange} 
            placeholder='이름'/>
        </div>
        <div>
            <select name='gender' value={state.gender} onChange={handleOnChange}>
                <option key={"남성"}>남성</option>
                <option key={"여성"}>여성</option>
            </select>
        </div>
        <div>
            <input
            name='birth'
            value={state.birth}
            type='date'
            onChange={handleOnChange}
            />
        </div>
    </div>
  );
};

export default Body3;
