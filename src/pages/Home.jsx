import { createClient } from '@supabase/supabase-js'
import { Auth } from '@supabase/auth-ui-react'
import { ThemeSupa } from '@supabase/auth-ui-shared'
import { useNavigate } from 'react-router-dom'

const supabase = createClient(
    'https://qkvibyrgicjwmvndbfyr.supabase.co',
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFrdmlieXJnaWNqd212bmRiZnlyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDczMDg0NzEsImV4cCI6MjAyMjg4NDQ3MX0.ENc8DXiSP0X9-aodjTmSbq-eavCUfygUgi6voxrKTs4'
);

  
export default function Home() {
    const navigate = useNavigate()

    supabase.auth.onAuthStateChange(async (event) => {
        if(event == 'SIGNED_IN'){
            navigate('/dashboard')
        }
    })

    return (
    <>
        <div>
            <header>
                <Auth 
                    supabaseClient={supabase}
                    appearance={{ theme: ThemeSupa }}
                    theme='dark'
                    providers={['google', 'apple']}
                />
            </header>
        </div>
    </>
    )
}
