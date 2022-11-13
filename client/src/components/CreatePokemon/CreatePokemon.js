import React,{useState,useEffect} from "react";
import {Link, useHistory} from 'react-router-dom';
import { postPokemon, getPokemons,getTypes} from '../../redux/Actions/index';
import { useDispatch, useSelector } from "react-redux";
import styles from '../CreatePokemon/CreatePokemon.module.css'

function validate({
    name,
    hp,
    attack,
    defense,
    speed,
    height,
    weight,
    image,
    types
})
{
    let errors = {} ;
    if (!/^[a-zA-Z\s]*$/.test(name)) {
        errors.name = <b>Characters are not allowed ❌</b>;
      }
      //if (!/^(^[1-9]$|^[1-9]$)?$/.test(difficulty)) {
        //errors.difficulty = <b>the health score cannot be less than 1 or greater than 5 ❌</b>
      //}
    if (!/^(^[1-9]$|^[0-9]{0,2}$|^(100)$)?$/.test(hp)) {
        errors.hp = <b>the hp cannot be less than 1 or greater than 100 ❌</b>
      }
    if (!/^(^[1-9]$|^[0-9]{0,2}$|^(100)$)?$/.test(attack)) {
        errors.attack = <b>the attack cannot be less than 1 or greater than 100 ❌</b>
      }
    if (!/^(^[1-9]$|^[0-9]{0,2}$|^(100)$)?$/.test(defense)) {
        errors.defense = <b>the defense cannot be less than 1 or greater than 100 ❌</b>
      }
    if (!/^(^[1-9]$|^[0-9]{0,2}$|^(100)$)?$/.test(speed)) {
        errors.speed = <b>the speed cannot be less than 1 or greater than 100 ❌</b>
      }
    if (!/^(^[1-9]$|^[0-9]{0,2}$|^(100)$)?$/.test(height)) {
        errors.height = <b>the height cannot be less than 1 or greater than 100 ❌</b>
      }
    if (!/^(^[1-9]$|^[1-9][0-9]{0,2}$|^(1000)$)?$/.test(weight)) {
        errors.weight = <b>the weight cannot be less than 1 or greater than 1000 ❌</b>
      }
    if (/^((ftp|http|https):\/\/)?www\.([A-z]+)\.([A-z]{2,})/.test(image)) {
        errors.image = <b>Characters are not allowed ❌</b>;
     }
    if (!types.length) {
        errors.types = <b> choose at least one type ❌</b>;
      }
    
    return errors;
};

function CreatePokemon(){
    const dispatch = useDispatch()
    const history = useHistory()
    const types = useSelector((state) => state.types)
    const [errors,setErrors] = useState({});
    const [input,setInput] = useState({
        name: "",
        hp: "",
        attack: "",
        defense: "",
        speed: "",
        height: "",
        weight: "",
        image : "",
        types : [],
    });
    useEffect(() => {
        dispatch(getTypes());
        //dispatch(getPokemons());
    },[dispatch]);

    function handleChange(e){
        setInput({
            ...input,
            [e.target.name] : e.target.value 
        })
        setErrors(validate({
            ...input,
            [e.target.name] : e.target.value 
        }))
        //console.log(input)
    }

    function handleDelete(el){
        setInput({
            ...input,
            types : input.types.filter(occ => occ !== el)
        })
    }

    function handleSelect(e){
        if (input.types.includes(e.target.value)) {
            return alert('You have already selected that type ⚠')
        }
        if (input.types.length === 7) {
            return alert("limit 7 Types ⚠");
          } 
        else {
            setInput({
                ...input,
                types : [...input.types,e.target.value] 
            })
            console.log("ok?", input.types ) 
        } 
        } 

    function handleSubmit(e){
        const max = 15
        const charactersImage = 1000

        if(!input.name ){
            e.preventDefault()
            return alert("The Pokemon needs a Name ❌")
        } if (input.name.length > max){
            e.preventDefault()
            return alert("the Name cannot exceed 15 characters ❌")
        }
        else if (!input.hp) {
            e.preventDefault()
            return alert("hp need a number!❌");
          }
        else if (input.hp < 1 && input.hp > 100){
            e.preventDefault()
            return alert ("the hp cannot be less than 1 or greater than 100 ❌")
        }
        else if (!input.attack) {
            e.preventDefault()
            return alert("attack need a number!❌");
          }
        else if (input.attack < 1 && input.attack > 100){
            e.preventDefault()
            return alert ("the attack cannot be less than 1 or greater than 100 ❌")
        }
        else if (!input.defense) {
            e.preventDefault()
            return alert("defense need a number!❌");
          }
        else if (input.defense < 1 && input.defense > 100){
            e.preventDefault()
            return alert ("the defense cannot be less than 1 or greater than 100 ❌")
        }
        else if (!input.speed) {
            e.preventDefault()
            return alert("speed need a number!❌");
          }
        else if (input.speed < 1 && input.speed > 100){
            e.preventDefault()
            return alert ("the speed cannot be less than 1 or greater than 100 ❌")
        }
        else if (!input.height) {
            e.preventDefault()
            return alert("height need a number!❌");
          }
        else if (input.height < 1 && input.height > 100){
            e.preventDefault()
            return alert ("the height cannot be less than 1 or greater than 100 ❌")
        }
        else if (!input.weight) {
            e.preventDefault()
            return alert("weight need a number!❌");
          }
        else if (input.weight < 1 && input.weight > 100){
            e.preventDefault()
            return alert ("the weight cannot be less than 1 or greater than 100 ❌")
        }
        else if(!input.types.length){
            e.preventDefault()
            return alert("You need to add at least one Type for the Pokemon ❌")
        }
        else if(!input.image.includes("https://") && !input.image.includes("http://")){
            e.preventDefault()
            return alert ("Only Url with https or http ❌")}
            if (input.image.length > charactersImage){
            e.preventDefault()
            return alert("the image cannot exceed 1000 characters ❌")
        }
         else {
            e.preventDefault();
            console.log(input)
            if (Object.values(errors).length > 0) alert("Please fill in all the fields ❌")
                else {
            dispatch(postPokemon(input))
            alert('¡Pokemon created successfully! ✔')
            setInput({
                name: "",
                hp: "",
                attack: "",
                defense: "",
                speed: "",
                height: "",
                weight: "",
                image : "",
                types : [],
            })
            history.push('/home')
        }
        }
    }

    return(
        <div>
            <Link to= '/home'><button className={styles.button}></button></Link>
            <div>
            <h1 className={styles.text}>CREATE YOUR POKEMON!</h1>
            <form onSubmit={(e) => handleSubmit(e)}>
                <div>
                    <label>NAME:</label>
                    <input type= 'text'
                    value={input.name}
                    name= "name"
                    placeholder="Enter Pokemon Name"
                    required=""
                    onChange={(e) => handleChange(e)}
                    />
                    {errors.name && (
                    <p className="error">{errors.name}</p>
                    )}
                </div>
                <div>
                  <label>HP</label>
                  <input type="number"
                   value={input.hp}
                   min="1" max='100'  
                   name='hp'
                   pattern="[A-Za-z0-9_- :.,()]{1,15}"
                   placeholder="Enter a hp"
                   required=""
                   onChange={(e) => handleChange(e)}/>
                   {errors.hp && (
                        <p className="error">{errors.hp}</p>
                    )}
                </div>
                <div>
                  <label>ATTACK</label>
                  <input type="number"
                   value={input.attack}
                   min="1" max='100'  
                   name='attack'
                   pattern="[A-Za-z0-9_- :.,()]{1,15}"
                   placeholder="Enter a attack"
                   required=""
                   onChange={(e) => handleChange(e)}/>
                   {errors.attack && (
                        <p className="error">{errors.attack}</p>
                    )}
                </div>
                <div>
                  <label>DEFENSE</label>
                  <input type="number"
                   value={input.defense}
                   min="1" max='100'  
                   name='defense'
                   pattern="[A-Za-z0-9_- :.,()]{1,15}"
                   placeholder="Enter a defense"
                   required=""
                   onChange={(e) => handleChange(e)}/>
                   {errors.defense && (
                        <p className="error">{errors.defense}</p>
                    )}
                </div>
                <div>
                  <label>SPEED</label>
                  <input type="number"
                   value={input.speed}
                   min="1" max='100'  
                   name='speed'
                   pattern="[A-Za-z0-9_- :.,()]{1,15}"
                   placeholder="Enter a speed"
                   required=""
                   onChange={(e) => handleChange(e)}/>
                   {errors.speed && (
                        <p className="error">{errors.speed}</p>
                    )}
                </div>
                <div>
                  <label>HEIGHT <small>(cm)</small>:</label>
                  <input type="number"
                   value={input.height}
                   min="1" max='100'  
                   name='height'
                   pattern="[A-Za-z0-9_- :.,()]{1,15}"
                   placeholder="Enter a height"
                   required=""
                   onChange={(e) => handleChange(e)}/>
                   {errors.height && (
                        <p className="error">{errors.height}</p>
                    )}
                </div>
                <div>
                  <label>WEIGHT <small>(kg)</small>:</label>
                  <input type="number"
                   value={input.weight}
                   min="1" max='1000'  
                   name='weight'
                   pattern="[A-Za-z0-9_- :.,()]{1,15}"
                   placeholder="Enter a weight"
                   required=""
                   onChange={(e) => handleChange(e)}/>
                   {errors.weight && (
                        <p className="error">{errors.weight}</p>
                    )}
                </div>
                <div>
                  <label>IMAGE</label>
                  <input type="text"
                   value={input.image} 
                   name='image'
                   placeholder="Enter Pokemon image"
                   required=""
                   onChange={(e) => handleChange(e)}/>
                   {errors.image && (
                        <p className="error">{errors.image}</p>
                    )}
                  </div>
                <select className={styles.text} onChange={(e) => handleSelect(e)}>
                <option value="" hidden name="types" >Select types</option>
                    {types && types?.map((el, i) =>{
                      return (
                      <option key={el.id + i} value={el.name}>{el.name}</option>)
                        })}
                </select>
                <ul>{input.types.map(el => el + ",")}</ul>
                <button className={styles.text} type='submit'>CREATE POKEMON</button>
            </form>
            </div>
            {input.types.map(el => 
                <div className={styles.delete}>
                    <p>{el}</p>
                    <button className={styles.x} onClick={() => handleDelete(el)}>x</button>
                </div>
            )}
        </div>
    )
}
export default CreatePokemon;

