package battlezone_bazaar.BattleZone.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
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

    @Column(name = "month")
    private Integer month;

    @Column(name = "year")
    private Integer year;

    @OneToOne
    @JoinColumn(name = "product_id")
    private Product product;
}
