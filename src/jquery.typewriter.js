/*! Jquery TypeWriter (C) 2017 jacmanh. */
(function ($) {

    var defaultsParams = {
        speed: 1000,
        delay: 5000,
        marge: 10
    };

    $.fn.typewriter = function (options) {
        var $this = $(this);

        return this.each(function () {
            $this = $(this);

            new TypeWriter($this, options);
        });
    };

    function TypeWriter(element, options) {
        this.element = element;
        this.params = defaultsParams;
        this.nextWord = null;

        $.extend(this.params, defaultsParams, options);
        this.init();
    }

    /**
     * Init classes
     */
    TypeWriter.prototype.init = function () {
        this.element.find('p:not(:first)').addClass('u-invisible');
        this.element.find('p:first').addClass('u-visible');

        this.activeItem = this.nextWord = this.getVisibleItem();
        this.showWord(0);
    };

    /**
     * Show word
     * @param initSpeed
     */
    TypeWriter.prototype.showWord = function (initSpeed) {
        var _this = this,
            width = this.nextWord.width(),
            speed = (initSpeed != undefined) ? initSpeed : this.params.speed;

        this.activeItem = this.nextWord;

        this.element.animate({
            width: width + this.params.marge + 'px'
        }, speed, function () {
            setTimeout(function () {
                _this.hideWord();
            }, _this.params.delay);
        });
    };

    /**
     * Hide word
     */
    TypeWriter.prototype.hideWord = function () {
        var _this = this;
        this.nextWord = this.getNextWord();

        this.element.animate({
            width: '0px'
        }, this.params.speed, function () {
            _this.updateClasses();
            _this.showWord();
        });
    };

    /**
     * Return Active item
     * @returns {*}
     */
    TypeWriter.prototype.getNextWord = function () {
        return (this.activeItem.is(':last-child')) ? this.element.children().eq(0) : this.activeItem.next();

    };

    /**
     * Switch classes
     */
    TypeWriter.prototype.updateClasses = function () {
        this.nextWord.addClass('u-visible').removeClass('u-invisible');
        this.activeItem.addClass('u-invisible').removeClass('u-visible');
    };

    /**
     * Get current active item
     */
    TypeWriter.prototype.getVisibleItem = function () {
        return this.element.find('p:visible').first();
    };

})(jQuery);
