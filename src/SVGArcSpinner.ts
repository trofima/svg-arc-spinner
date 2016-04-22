'use strict';

export class SVGArcSpinner {
    private VIEW_BOX_SIZE: number = 100;
    private size: number;
    private radius: number;
    private center: number;

    constructor({size}) {
        this.size = Number(size);
        this.center = this.VIEW_BOX_SIZE / 2;

        // IMPORTANT! A css animation depends on this value. Now it's 40
        this.radius = this.center - 10;
    }

    render() {
        return `
                <svg
                    class="svg-spinner"
                    width="${this.size}"
                    height="${this.size}"
                    viewBox="0 0 ${this.VIEW_BOX_SIZE} ${this.VIEW_BOX_SIZE}"
                    >
                    <circle 
                        r="${this.radius}" 
                        cx="${this.center}" 
                        cy="${this.center}"
                        ></circle>
                </svg>
            `;
    }
}
