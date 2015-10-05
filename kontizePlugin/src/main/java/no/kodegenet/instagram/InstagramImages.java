package no.kodegenet.instagram;

/**
 * Created by jhsmbp on 27/09/15.
 */
public class InstagramImages {
    private InstagramImage low_resolution;
    private InstagramImage thumbnail;
    private InstagramImage standard_resolution;

    public InstagramImages() {
    }

    public InstagramImage getLow_resolution() {
        return low_resolution;
    }

    public void setLow_resolution(InstagramImage low_resolution) {
        this.low_resolution = low_resolution;
    }

    public InstagramImage getThumbnail() {
        return thumbnail;
    }

    public void setThumbnail(InstagramImage thumbnail) {
        this.thumbnail = thumbnail;
    }

    public InstagramImage getStandard_resolution() {
        return standard_resolution;
    }

    public void setStandard_resolution(InstagramImage standard_resolution) {
        this.standard_resolution = standard_resolution;
    }
}
