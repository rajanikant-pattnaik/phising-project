
const options = {
	method: 'GET',
	headers: {
		'content-type': 'application/octet-stream',
		'X-RapidAPI-Key': '96dc3bc4c7msh5a2e8330accf78ap1d0c9djsna783b8ed5f34',
		'X-RapidAPI-Host': 'find-any-ip-address-or-domain-location-world-wide.p.rapidapi.com'
	}
};

const options2 = {
	method: 'GET',
	headers: {
		'content-type': 'application/octet-stream',
		'X-RapidAPI-Key': '96dc3bc4c7msh5a2e8330accf78ap1d0c9djsna783b8ed5f34',
		'X-RapidAPI-Host': 'mailcheck.p.rapidapi.com'
	}
};
export const ipSearch = async (name) => {
    const url = `https://find-any-ip-address-or-domain-location-world-wide.p.rapidapi.com/iplocation?ip=${name}&apikey=873dbe322aea47f89dcf729dcc8f60e8`;
    const data = await fetch(url, options);
    const res = await data.json();
    return res;
}
export const validDomain=async(string)=>{
    const url = `https://mailcheck.p.rapidapi.com/?domain=${string}`;
    const data=await fetch(url,options2);
    const res=await data.json();
    return res;
}