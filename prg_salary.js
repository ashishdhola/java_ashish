let email=(a) => 
{
    console.log(a.substring(0, a.lastIndexOf(':')));
    console.log(a.substring(a.lastIndexOf(':'), a.lastIndexOf('"')));
    console.log(a.substring(a.lastIndexOf(':')+2, a.lastIndexOf('@')));
    console.log(a.substring(a.lastIndexOf('@')+1, a.lastIndexOf('.')));
    console.log(a.slice(a.lastIndexOf('.')+1,-1));
}
email(`EmailAddress:"Isla_Quinn2628@qater.org"`);
email(`EmailAddress:"Deborah_Egerton8037@irrepsy.com"`)
email(`EmailAddress:"Peyton_Hunter3986@fuliss.net"`)
email(`EmailAddress:"Deborah_Egerton8037@irrepsy.com"`)
