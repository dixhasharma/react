function Form() {
    return (
        <form>
            <label>First Name</label>
            <input type="text" placeholder="your first name"></input>
            <label>last Name</label>
            <input type="text" placeholder="your last anme"></input>
            <br></br>
            <label>email</label>
            <input type="text" placeholder="example@gmail.com"></input>

            <label>Gender</label>
            <select id="gender" placeholder="male">
                <option value="male">male</option>
                <option value="female">female</option>
            </select>
            <br></br>
            <label>Phone</label>
            <input type="text" placeholder="area code"></input>
            <input type="text" placeholder=""></input>
            <br></br>
            <label>Apply for position</label>
            <br></br>
            <input type="text" placeholder="your first name"></input>
            <br></br>
            <label>when can you start</label>
            <br></br>
            <input type="date" placeholder=""></input>
            <br></br>
            <label>Address</label>
            <br></br>
            <input type="text" placeholder="your address"></input>
            <br></br>
            <input type="text" placeholder=""></input>
            <br>
            </br>
            <label>Cover letter</label>
            <br></br>
            <textarea></textarea>
            <br></br>
            <lable>upload Resume</lable>
            <input type="file" placeholder="your first name"></input>

        </form>
    )
}
export default Form;