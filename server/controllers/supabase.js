import { createClient } from "supabase/supabase-js";
import postgres from "postgres";
require('dotenv').config();

const connectionString = process.env.DB_URL;
const sql = postgres(connectionString);

const db_url = process.env.DB_URL;
const db_key = process.env.DB_KEY;

const supabase = createClient(process.env.SUPABASE_URL, db_key);


console.log('Connecting to DB at:', new URL(process.env.DB_URL).host);


let { data, error } = await supabase.auth.signUp({
  email: 'someone@email.com',
  password: 'FiqmaNXmUWiEDrxbYTWO'
})




export default { sql, supabase };
