package battlezone_bazaar.BattleZone.models;
import jakarta.persistence.*;
import lombok.Data;

import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "qualityGroup")
@Data
public class QualityGroup {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "material")
    private String material;

    @Column(name = "parameters")
    private String parameters;

    @OneToMany(mappedBy = "qualityGroup")
    private Set<Product> products = new HashSet<>(); // Initialize the set

}

