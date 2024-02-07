import { createClient } from '@supabase/supabase-js'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'

const supabase = createClient(
    'https://qkvibyrgicjwmvndbfyr.supabase.co',
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFrdmlieXJnaWNqd212bmRiZnlyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDczMDg0NzEsImV4cCI6MjAyMjg4NDQ3MX0.ENc8DXiSP0X9-aodjTmSbq-eavCUfygUgi6voxrKTs4'
);

export default function Dashboard() {
    const [user, setUser] = useState({})
    const navigate = useNavigate()
    
    useEffect(() => {
        async function getUserData() {
            await supabase.auth.getUser().then((value) => {
                if(value.data?.user){
                    console.log(value.data.user)
                    setUser(value.data.user)
                }
            })
        }
        getUserData()
    }, [])

    async function signOutUser() {
        await supabase.auth.signOut()
        navigate('/')
    }

    return (
    <>
        <div>
            <header>
                { Object.keys(user).length !== 0 ? 
                    <>
                        <h1>Dashboard</h1>
                        <button onClick={() => signOutUser()}>Sign Out</button>
                    </>
                :
                    <>
                        <h1>User is not logged in </h1>
                        <button onClick={() => { navigate("/") } }>Go Back</button>

                    </>
                }
            </header>
        </div>
    </>
    )
}
