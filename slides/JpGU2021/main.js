const el_title = document.getElementById('presentation_title');
let title = el_title.firstElementChild.textContent
title = title.slice(0,32);
el_title.firstElementChild.innerHTML = '<a href="https://confit.atlas.jp/guide/event/jpgu2021/subject/MIS24-P01/tables" target="_blank">' + title + " ...</a>"

// ======================================== //
// トップスライドはナビゲーションを非表示 //
// ======================================== //

let el_nav = document.getElementById('nav_slide');
let el_slidenumber = document.getElementsByClassName('slide-number');
Reveal.addEventListener( 'top-slide', function() {
    el_nav.className = 'top-slide';
    el_slidenumber.className = 'top-slide';
}, false );

// ======================================== //
// ナビゲーション //
// ======================================== //

const num_part = 7;
const el_part = Array(num_part);
const el_part_sub = Array(num_part);
for (let i = 1; i <= num_part; i++) {
    el_part[i] = document.getElementById('nav_part'+ i);
    el_part_sub[i] = document.getElementById('nav_part'+ i +'-sub');
}
Reveal.addEventListener( `part1`, function() {
    for (let i = 1; i <= num_part; i++) {
        if (i < 1) {
            el_part[i].className = 'past';
        } else if (i === 1) {
            el_part[i].className = 'here';
        } else {
            el_part[i].className = 'future';
        }

        el_part_sub[i].className = 'sub-slide';
    }
}, false );
Reveal.addEventListener( `part1-sub`, function() {
    for (var i = 1; i <= num_part; i++) {
        if (i < 1) {
            el_part[i].className = 'past';
        } else if (i === 1) {
            el_part[i].className = 'here';
        } else {
            el_part[i].className = 'future';
        }

        if (i === 1) {
            el_part_sub[i].className = 'here show-sub';
        } else {
            el_part_sub[i].className = 'sub-slide';
        }
    }
}, false );

Reveal.addEventListener( 'part2', function() {
	for (var i = 1; i <= num_part; i++) {
		if (i < 2) {
			el_part[i].className = 'past';
		} else if (i === 2) {
			el_part[i].className = 'here';
		} else {
			el_part[i].className = 'future';
		}

		el_part_sub[i].className = 'sub-slide';
	}
}, false );
Reveal.addEventListener( 'part2-sub', function() {
	for (var i = 1; i <= num_part; i++) {
		if (i < 2) {
			el_part[i].className = 'past';
		} else if (i === 2) {
			el_part[i].className = 'here';
		} else {
			el_part[i].className = 'future';
		}

		if (i === 2) {
			el_part_sub[i].className = 'here show-sub';
		} else {
			el_part_sub[i].className = 'sub-slide';
		}
	}
}, false );

Reveal.addEventListener( 'part3', function() {
	for (var i = 1; i <= num_part; i++) {
		if (i < 3) {
			el_part[i].className = 'past';
		} else if (i === 3) {
			el_part[i].className = 'here';
		} else {
			el_part[i].className = 'future';
		}

		el_part_sub[i].className = 'sub-slide';
	}
}, false );
Reveal.addEventListener( 'part3-sub', function() {
	for (var i = 1; i <= num_part; i++) {
		if (i < 3) {
			el_part[i].className = 'past';
		} else if (i === 3) {
			el_part[i].className = 'here';
		} else {
			el_part[i].className = 'future';
		}

		if (i === 3) {
			el_part_sub[i].className = 'here show-sub';
		} else {
			el_part_sub[i].className = 'sub-slide';
		}
	}
}, false );

Reveal.addEventListener( 'part4', function() {
	for (var i = 1; i <= num_part; i++) {
		if (i < 4) {
			el_part[i].className = 'past';
		} else if (i === 4) {
			el_part[i].className = 'here';
		} else {
			el_part[i].className = 'future';
		}

		el_part_sub[i].className = 'sub-slide';
	}
}, false );
Reveal.addEventListener( 'part4-sub', function() {
	for (var i = 1; i <= num_part; i++) {
		if (i < 4) {
			el_part[i].className = 'past';
		} else if (i === 4) {
			el_part[i].className = 'here';
		} else {
			el_part[i].className = 'future';
		}

		if (i === 4) {
			el_part_sub[i].className = 'here show-sub';
		} else {
			el_part_sub[i].className = 'sub-slide';
		}
	}
}, false );

Reveal.addEventListener( 'part5', function() {
	for (var i = 1; i <= num_part; i++) {
		if (i < 5) {
			el_part[i].className = 'past';
		} else if (i === 5) {
			el_part[i].className = 'here';
		} else {
			el_part[i].className = 'future';
		}

		el_part_sub[i].className = 'sub-slide';
	}
}, false );
Reveal.addEventListener( 'part5-sub', function() {
	for (var i = 1; i <= num_part; i++) {
		if (i < 5) {
			el_part[i].className = 'past';
		} else if (i === 5) {
			el_part[i].className = 'here';
		} else {
			el_part[i].className = 'future';
		}

		if (i === 5) {
			el_part_sub[i].className = 'here show-sub';
		} else {
			el_part_sub[i].className = 'sub-slide';
		}
	}
}, false );

Reveal.addEventListener( 'part6', function() {
	for (var i = 1; i <= num_part; i++) {
		if (i < 6) {
			el_part[i].className = 'past';
		} else if (i === 6) {
			el_part[i].className = 'here';
		} else {
			el_part[i].className = 'future';
		}

		el_part_sub[i].className = 'sub-slide';
	}
}, false );
Reveal.addEventListener( 'part6-sub', function() {
	for (var i = 1; i <= num_part; i++) {
		if (i < 6) {
			el_part[i].className = 'past';
		} else if (i === 6) {
			el_part[i].className = 'here';
		} else {
			el_part[i].className = 'future';
		}

		if (i === 6) {
			el_part_sub[i].className = 'here show-sub';
		} else {
			el_part_sub[i].className = 'sub-slide';
		}
	}
}, false );

Reveal.addEventListener( 'part7', function() {
	for (var i = 1; i <= num_part; i++) {
		if (i < 7) {
			el_part[i].className = 'past';
		} else if (i === 7) {
			el_part[i].className = 'here';
		} else {
			el_part[i].className = 'future';
		}

		el_part_sub[i].className = 'sub-slide';
	}
}, false );
Reveal.addEventListener( 'part7-sub', function() {
	for (var i = 1; i <= num_part; i++) {
		if (i < 7) {
			el_part[i].className = 'past';
		} else if (i === 7) {
			el_part[i].className = 'here';
		} else {
			el_part[i].className = 'future';
		}

		if (i === 7) {
			el_part_sub[i].className = 'here show-sub';
		} else {
			el_part_sub[i].className = 'sub-slide';
		}
	}
}, false );
