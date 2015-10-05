package no.kodegenet.instagram;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by jhsmbp on 27/09/15.
 */
public class InstagramObject {
    private List<InstagramData> data;

    public InstagramObject() {
        data = new ArrayList<>();
    }

    public List<InstagramData> getData() {
        return data;
    }

    public void setData(List<InstagramData> data) {
        this.data = data;
    }
}
