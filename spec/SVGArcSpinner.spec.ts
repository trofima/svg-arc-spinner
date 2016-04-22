'use strict';

import {SVGArcSpinner} from './../src/SVGArcSpinner'

describe('Class SVGArcSpinner', function() {
    beforeEach(function() {
        this.createSpinner = ({size}) => new SVGArcSpinner({size: size});

        this.expect = (svgSpinner) => {
            this.svgSpinner = svgSpinner;

            return {
                toBe: {
                    ofSize: this.ofSize
                }
            };
        };

        this.ofSize = (size) => {
            expect(this.svgSpinner.render().replace(/\r?\n|\r|\t|\s\s+/g, '')).toBe(
                // r="40" - radius. A css animation depends on this value
                `
                    <svg
                        class="svg-spinner"
                        width="${size}"
                        height="${size}"
                        viewBox="0 0 100 100"
                        >
                        <circle 
                            r="40"
                            cx="50" 
                            cy="50"
                            ></circle>
                    </svg>
                `.replace(/\r?\n|\r|\t|\s\s+/g, '')
            );
        };
    });

    describe('render', function() {
        it('should render svg element with given size and radius 40', function() {
            this.expect(this.createSpinner({size: 0}))
                .toBe
                .ofSize(0);

            this.expect(this.createSpinner({size: 200}))
                .toBe
                .ofSize(200);
        });
    });
});
