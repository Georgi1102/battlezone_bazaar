package battlezone_bazaar.BattleZone.services;

import battlezone_bazaar.BattleZone.dtos.CategoryDto;
import battlezone_bazaar.BattleZone.dtos.DiscussionDto;
import battlezone_bazaar.BattleZone.dtos.ProductDto;
import battlezone_bazaar.BattleZone.mappers.DiscussionMapper;
import battlezone_bazaar.BattleZone.models.BestSeller;
import battlezone_bazaar.BattleZone.models.Category;
import battlezone_bazaar.BattleZone.models.Discussion;
import battlezone_bazaar.BattleZone.models.Product;
import battlezone_bazaar.BattleZone.repositories.BestSellerRepository;
import battlezone_bazaar.BattleZone.repositories.DiscussionRepository;
import battlezone_bazaar.BattleZone.repositories.ProductRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.YearMonth;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class DiscussionService {
    private final DiscussionRepository discussionRepository;
    private final DiscussionMapper discussionMapper;
    public List<Discussion> getAllDiscussions(){
        return discussionRepository.findAll();
    }

    public boolean addDiscussion(DiscussionDto discussionDto) {
        Optional<Discussion> existingDiscussion = discussionRepository.findByTitle(discussionDto.title());
        String newTitle = existingDiscussion.map(Discussion::getTitle).orElse(null);
        Discussion discussion = discussionMapper.converDtoToEnity(discussionDto, newTitle);
        if (existingDiscussion.isPresent()) {
            return false;
        }
        discussionRepository.save(discussion);
        return true;
    }

    public void saveDiscussions(List<DiscussionDto> records) {
        try {
            for (DiscussionDto record :
                    records) {
                this.addDiscussion(record);
            }
        } catch (Exception e) {
            throw e;
        }
    }
}
