const dns = require('dns');

dns.lookup('db.lmosobliyitskcyjaktb.supabase.co', (err, address, family) => {
  if (err) {
    console.error('DNS lookup failed:', err);
  } else {
    console.log('DNS lookup success:', address, 'IPv', family);
  }
});
