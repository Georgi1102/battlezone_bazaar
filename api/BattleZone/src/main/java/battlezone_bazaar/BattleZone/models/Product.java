package battlezone_bazaar.BattleZone.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.Data;

@Entity
@Table(name = "product", uniqueConstraints = @UniqueConstraint(columnNames = {"name", "manufacturer"}))
@Data
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(name = "name")
    private String name;
    @Column(name = "manufacturer")
    private String manufacturer;
    @Column(name = "description")
    private String description;
    @Column(name = "quantity")
    private Integer quantity;
    @Column(name = "price")
    private Integer price;
    @Column(name = "imageUrl")
    private String imageUrl;

    @ManyToOne
    @JoinColumn(name = "category_id")
    @JsonIgnore
    private Category category;

    @OneToOne(mappedBy = "product")
    @JsonIgnore
    private BestSeller bestSeller;

    @ManyToOne
    @JoinColumn(name = "qualityGroup_id")
    @JsonIgnore
    private QualityGroup qualityGroup;

}