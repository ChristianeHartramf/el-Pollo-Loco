class Chicken extends MovableObject {

    y = 350;
    width  = 50;
    height = 75;


    constructor(){
        super().loadImage('img/3_enemies_chicken/chicken_normal/1_walk/1_w.png');

        this.x = 200 + Math.random() * 480;
    }
}