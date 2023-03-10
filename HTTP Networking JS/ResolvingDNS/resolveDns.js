async function fetchIPAddress(domain) {
   const res = await fetch(`https://cloudflare-dns.com/dns-query?name=${domain}&type=A`, {
      headers: {
         'accept': 'application/dns-json'
      }
   })

   const resJson = await res.json()

   return resJson.Answer[0].data
}

const dns = 'www.bowenivan.dev'
const ipAdress = fetchIPAddress(dns)
   .then((ip) => {
      console.log(`%cIP Address for ${dns} is ${ip}`, "color: green")
   })
   .catch(err => {
      console.log(`%c--Did not find the domain name ${err} -- %c`, "color: red")
   })
