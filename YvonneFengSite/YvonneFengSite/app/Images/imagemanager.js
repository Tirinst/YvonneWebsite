var Images;
(function (Images) {
    var Manager = (function () {
        function Manager(images, $location) {
            this.images = images;
            this.selectImage = function (newPicture) {
                this.selectedImage = newPicture;
            };
            this.selectImageById = function (id) {
                this.selectImage(_.filter(this.images.images, function (image) { return image.id == id; })[0]);
                this.location.path('/Collections/' + this.images.name + '/' + id.toString());
            };
            this.unselectImage = function () {
                this.selectImage(null);
                this.location.path('/Collections/' + this.images.name);
            };
            this.isImageSelected = function () {
                return this.selectedImage != null;
            };
            this.selectNextImage = function () {
                this.selectImageById((this.selectedImage.id + 1) % this.images.images.length);
            };
            this.selectPreviousImage = function () {
                var nextId;
                if (this.selectedImage.id == 0)
                    nextId = this.images.images.length - 1;
                else
                    nextId = (this.selectedImage.id - 1);
                this.selectImageById(nextId);
            };
            this.selectedImage = null;
            this.location = $location;
        }
        return Manager;
    }());
    Images.Manager = Manager;
})(Images || (Images = {}));
