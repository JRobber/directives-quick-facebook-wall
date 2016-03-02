var data = [
    {
        title: "I wish I was a dolphin",
        body: "Dolpins are so cool with their bottle noses, and their adorable giggle/laugh/speak.  If I was a dolpin I would only have happy feels."
    },
    {
        title: "Once I dreamed of chocolate chip aliens",
        body: "The aliens weren't actually chocolate chip, so I appologize for the click-bait title, but the fact of the matter is that the mother ship of the aliens was a giant chocolate chip cookie.  It has a very large chocolate chip that hung upside down from its center.  It was from this chocolate chip that it's tractor beam was fired to abduct the good people of earth."
    },
    {
        title: "Selfie",
        body: "It wouldn't be a facebook clone without a selfie."
    },
];
angular.module('wallApp').service('wallService', function(){
  
    this.getPosts = function(){
        return data;
    }  
})