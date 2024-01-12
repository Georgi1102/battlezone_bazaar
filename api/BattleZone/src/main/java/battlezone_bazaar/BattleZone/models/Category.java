package battlezone_bazaar.BattleZone.models;

import jakarta.persistence.*;
import lombok.Data;

import java.util.Set;

@Entity
@Table(name = "category")
@Data
public class Category {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "name",  unique = true)
    private String name;

    @OneToMany(mappedBy = "category")
    private Set<Product> products;
}

