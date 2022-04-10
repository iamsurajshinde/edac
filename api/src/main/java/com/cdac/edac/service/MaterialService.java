package com.cdac.edac.service;

import com.cdac.edac.entity.Material;
import com.cdac.edac.model.MaterialModel;
import org.springframework.stereotype.Service;

import java.util.List;

public interface MaterialService {
    List<MaterialModel> getMaterial(Integer subjectId);

    MaterialModel saveMaterial(Material material);

    MaterialModel updateMaterial(Material material);
}
