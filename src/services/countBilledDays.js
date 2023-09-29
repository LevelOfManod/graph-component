export const countBilledDays = (data) => {
   let totalBilledDays = 0;

    for(let user of data){
       totalBilledDays += user._activites.length
    }

    return totalBilledDays / 2;
}