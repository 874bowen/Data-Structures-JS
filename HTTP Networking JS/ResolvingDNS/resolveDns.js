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

// DNS is the system that keeps a record of names to numbers(IP)
// International Corporation of Assigned Names and Numbers (ICANN) keep the DNS system up and running
function getDomainNameFromURL(url){
   const urlObj = new URL(url)
   console.log(urlObj);
   return urlObj?.hostname
}
const domainName = getDomainNameFromURL("http://postgres:1245@localhost:5432/tourism-ke")
console.log(`The domain name for ${dns} is ${domainName}`);  