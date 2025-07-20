import { Children, useEffect, useState } from "react";
import { Navigate } from 'react-router-dom'
import { createClient } from '@supabase/supabase-js'
import Dashboard from "./Dashboard";

const supabase = createClient(
    import.meta.env.VITE_SUPABASE_URL,
    import.meta.env.VITE_SUPABASE_ANON_KEY
);

export default function ProtectedLogin() {
    const [session, setSession] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        supabase.auth.getSession().then(({ data: { session } }) => {
            setSession(session);
            setLoading(false);
        })

        const { 
            data: { subscription },

        } = supabase.auth.onAuthStateChange((_event, session) => {
            setSession(session);
            setLoading(false);
        
    })

    return () => subscription.unsubscribe();
}, []);

if (loading) {
    return <div>Loading...</div>;
}

if (!session) {
    return <Navigate to='/login' replace />;
}

return <Dashboard />;


}

