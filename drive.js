AFRAME.registerComponent('drive ', {
    init:function(){
        var gameStateValue = this.el.getAttribute("game")
        if(gameStateValue == "play"){
            this.driveCar()
        }
    },

    isVelocityActive:function(){
        console.log("Hi")
        return Math.random() < 0.25
    },

    driveCar:function(){
        var multiply = 10;
        var wheelRotation = 0;
        

        //Key Down Events

        window.addEventListener('keydown', function(e){
            var wheel= document.querySelector("#control-wheel")

            if(e.code == "arrowRight" && wheelRotation >-40){
                wheelRotation-=5
                wheel.setAttribute("rotation", {x:0, y:0, z:wheelRotation})
            }

         // Camera movements Control
         
         var cameraRig =document.querySelector("camera-rig")
         var cameraRotation = cameraRig.getAttribute("rotation")
         var cameraPosition = cameraRig.getAttribute("position")
         var cameraMoveControl = cameraRig.getAttribute("movement-control")

         console.log(cameraMoveControl)
         cameraRig.setAttribute("movement-controls", {speed: angleMoveControl})
         console.log(cameraMoveControl.speed)

         var cameraDirection = new THREE.Vector3();
         cameraRig.object3d.getWorldDirection(cameraDirection);

         if(e.code == "ArrowRight"){
            cameraRotation.y = 5
            cameraRig.setAttribute("rotation", {x:0, y:cameraRotaion.y})
            cameraRig.setAttribute("movement-controls")
         }
         if(e.code == "ArrowLeft"){
            cameraRotation.y=-5
            cameraRig.setAtrribute("rotation", {x:0, y:cameraRotation.y})
            cameraRig.setAttribute("movement-controls")

         }

        })
    }

})