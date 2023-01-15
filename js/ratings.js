function collect_ratings()
{
    let ratings = {

        count : 0,
        sum :0,
        average:0

    }

   let rating = 0;
   const elements = document.querySelectorAll(".rating")

   elements.forEach(element => {
       let temp =  element.id.replace('star', '')
        rating = parseInt(temp)
        ratings.count += parseInt(element.value)
        ratings.sum += parseInt(element.value) * rating;
        console.log(ratings.sum)
   });

   if (ratings.count !== 0) 
   {
    ratings.average = ratings.sum/ratings.count
   }
     return ratings
}



document.addEventListener('change',() => {

    const ratings = collect_ratings();
    document.querySelector('#average').value = ratings.average.toFixed(2);

})