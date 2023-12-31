import { useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';

export default function RegisterPage() {
    const [name, setName] = useState('') 
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [birthday, setBirthday] = useState('') 
    const [password, setPassword] = useState('')
    async function registerUser (ev) {
        ev.preventDefault()
        try {
            await axios.post('/register', {
                name, username, birthday,
                email, phone, password
            });
            alert('注册成功，现在您可以登入')
        } catch (e) {
            alert('注册失败! 请稍后再试')
        }
    }

    return (
        <div className="mt-40 grow flex items-center justify-around">
            <div className="mb-64">
                <h1 className="text-4xl text-center mb-4">注册</h1>
                <form className="max-w-md mx-auto" onSubmit={registerUser}>
                    <input type="text" placeholder="姓名" className="text-center" value={name} onChange={ev => setName(ev.target.value)} />
                    <input type="text" placeholder="用户名" className="text-center" value={username} onChange={ev => setUsername(ev.target.value)} />
                    <div className="grow flex items-center justify-around border rounded-2xl py-2">
                        <label className="text-gray-400">出生日期</label>
                        <input type="date" placeholder="出生日期" className="center" value={birthday} onChange={ev => setBirthday(ev.target.value)} max={new Date().toISOString().split("T")[0]} />
                    </div> 
                    <input type="text" placeholder="手机号码" className="text-center" value={phone} onChange={ev => setPhone(ev.target.value)} />
                    <input type="email" placeholder="您的邮箱" className="text-center" value={email} onChange={ev => setEmail(ev.target.value)} />
                    <input type="password" placeholder="密码" className="text-center" value={password} onChange={ev => setPassword(ev.target.value)} />
                    <button className="primary">注册</button>
                    <div className="text-center py-2 text-gray-500">
                        已经是会员? <Link className='underline text-black' to={'/login'}>登入</Link>
                    </div>
                </form>
            </div>
        </div>
    );
}
