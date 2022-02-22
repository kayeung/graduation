    var swiperTitle = new Swiper('#title', {
    	allowTouchMove: false,
    	speed: 1000,
    	slideToClickedSlide: true,
    	slidesPerView: 'auto',
    	loop: true,
    	loopedSlides: 3,
    	slidesOffsetBefore: window.innerWidth / 2 - 490,
    	pagination: {
    		el: '.swiper-pagination',
    		clickable: true,
    	},
    	on: {
    		transitionStart: function() {
    			indexTitle = this.$el.find('.swiper-slide-active').index();
    			this.slides.find('h3').transition(1000)
    			this.slides.eq(indexTitle).prevAll().removeClass('next').addClass('prev')
    			this.slides.eq(indexTitle).nextAll().removeClass('prev').addClass('next')
    			this.slides.eq(indexTitle).removeClass('prev next')
    		},
    		transitionEnd: function() {
    			indexTitle = this.$el.find('.swiper-slide-active').index();
    			this.slides.find('h3').transition(0) //loop模式下切换改变activeIndex

    			this.slides.eq(indexTitle).prevAll().removeClass('next').addClass('prev')
    			this.slides.eq(indexTitle).nextAll().removeClass('prev').addClass('next')
    			this.slides.eq(indexTitle).removeClass('prev next')
    			swiper = this
    			setTimeout(function() {
    				swiper.slides.find('h3').transition('')
    			}, 1);
    		},

    	},
    	init: function() {
    		this.emit('transitionEnd transitionStart');
    	},

    })

     var swiperVideo = new Swiper('#videos', {
    	allowTouchMove: false,
    	parallax: true,
    	//清除video遮挡文字BUG
    	speed: 1000,
    	loop: true,
    	loopedSlides: 3,
    	on: {
    		transitionEnd: function() {
    			this.slides.eq(this.previousIndex).find('video')[0].pause()
    			this.slides.eq(this.activeIndex).find('video')[0].play()
    		},
    		init: function() {
    			this.emit('transitionEnd');
    		},
    	},
    });
    swiperTitle.controller.control = swiperVideo