package battlezone_bazaar.BattleZone.models;

import jakarta.persistence.*;
import lombok.Data;

import java.util.Set;

@Entity
@Table(name = "best_seller")
@Data
public class BestSeller {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "mounth")
    private String mounth;

    @Column(name = "year")
    private String year;

    @OneToOne
    @JoinColumn(name = "product_id")
    private Product product;
}
